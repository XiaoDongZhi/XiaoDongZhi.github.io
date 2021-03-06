---

title: LVM扩大LV
categories: blog
---

前提：
我的操作系统是Centos7，硬盘sda总共500G，其中安装系统的时候根分区和home分区以及swap分区用了部分磁盘空间，使用情况如下：   
```
[root@localhost ~]# df -h
Filesystem               Size  Used Avail Use% Mounted on
/dev/mapper/centos-root   50G  9.5G   41G  19% /
devtmpfs                 3.7G     0  3.7G   0% /dev
tmpfs                    3.7G   41M  3.7G   2% /dev/shm
tmpfs                    3.7G   43M  3.7G   2% /run
tmpfs                    3.7G     0  3.7G   0% /sys/fs/cgroup
/dev/sda1               1014M  226M  789M  23% /boot
/dev/loop0               1.9G  6.1M  1.7G   1% /srv/node/swiftloopback
/dev/mapper/centos-home   80G  4.4G   76G   6% /home
tmpfs                    752M   44K  752M   1% /run/user/1000
```

sda硬盘信息如下   
```
[root@localhost ~]# fdisk /dev/sda -l

Disk /dev/sda: 480.1 GB, 480103981056 bytes, 937703088 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk label type: dos
Disk identifier: 0x00026fa8

   Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *        2048     2099199     1048576   83  Linux
/dev/sda2         2099200   290467839   144184320   8e  Linux LVM

```

思路：   
1、由于packstack安装openstack的时候，cinder后端配置逻辑是创建20G的loop设备/dev/loop1，使用该loop设备创建pv，并加入vg cinder-volume中。
再创建名为cinder-volumes-pool的LV；   
2、由于我本地磁盘sda盘有500G，而系统使用的sda1,sda2后还剩下不少磁盘空间。故格式化一块盘sda3，然后基于该盘创建pv，并加入vg cinder-volume中。
之后扩大cinder-volumes-pool的lv；   


步骤：
1、fdisk /dev/sda，使用"n","p","t"等指令，创建sda3的lvm格式磁盘    
2、重启主机，以使磁盘生效  
3、pvcreate /dev/sda3，基于sda3创建pv   
4、vgextend cinder-volumes /dev/sda3，将新创建的pv加入到vg中   
5、lvresize -L 120G /dev/cinder-volumes/cinder-volumes-pool 扩大lv    
6、通过lvs命令查询，回显如下：   
```
[root@localhost ~]# lvs
  LV                  VG             Attr       LSize   Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert
  home                centos         -wi-ao----  80.00g                                                    
  root                centos         -wi-ao----  50.00g                                                    
  swap                centos         -wi-ao----   7.50g                                                    
  cinder-volumes-pool cinder-volumes twi-a-tz-- 140.00g             0.00   2.91                            
```
扩容完成。。。。



