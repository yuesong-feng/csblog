# 算法笔记

算法笔记，来源于labuladong的算法小抄、代码随想录、LeetCode HOT 100、codetop、Blind 75等。

## 二分搜索

> tips: `mid = left + (right - left) / 2`可以防止`left + right`太大导致溢出

在排序数组中寻找一个数，[704. 二分查找](https://leetcode.cn/problems/binary-search/)

```cpp
    int search(vector<int>& nums, int target) {
        int left = 0, right = nums.size() - 1;
        while(left <= right){
            int mid = left + (right - left) / 2;
            if(nums[mid] == target){
                return mid;
            } else if(nums[mid] < target){
                left = mid + 1;
            } else if(nums[mid] > target){
                right = mid - 1;
            }
        }
        return -1;
    }
```

寻找左侧边界和右侧边界的二分搜索，[34. 在排序数组中查找元素的第一个和最后一个位置](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/)

```cpp
    int left_bound(vector<int>& nums, int target){
        int left = 0, right = nums.size() - 1;
        int lb = -1;
        while(left <= right){
            int mid = left + (right - left) / 2;
            if(nums[mid] < target){
                left = mid + 1;
            } else if(nums[mid] > target){
                right = mid - 1;
            } else if(nums[mid] == target){
                lb = mid;
                right = mid - 1;
            }
        }
        return lb;
    }
    int right_bound(vector<int>& nums, int target){
        int left = 0, right = nums.size() - 1;
        int rb = -1;
        while(left <= right){
            int mid = left + (right - left) / 2;
            if(nums[mid] < target){
                left = mid + 1;
            } else if(nums[mid] > target){
                right = mid - 1;
            } else if(nums[mid] == target){
                rb = mid;
                left = mid + 1;
            }
        }
        return rb;
    }
    vector<int> searchRange(vector<int>& nums, int target) {
        int left = left_bound(nums, target);
        int right = right_bound(nums, target);
        return {left, right};
    }
```
