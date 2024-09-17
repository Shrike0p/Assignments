#include <iostream>
#include <map>

using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
    ListNode *detectCycle(ListNode *head) {
        map<ListNode*,int> mp;
        ListNode* temp = head;

        while (temp != NULL) {
            if (mp.find(temp) != mp.end()) {
                return temp;
            }
            mp[temp] = 1;
            temp = temp->next;
        }
        return NULL;
    }
};

int main() {
    ListNode *node1 = new ListNode(3);
    ListNode *node2 = new ListNode(2);
    ListNode *node3 = new ListNode(0);
    ListNode *node4 = new ListNode(-4);

    node1->next = node2;
    node2->next = node3;
    node3->next = node4;
    node4->next = node2; // Create a cycle

    Solution solution;
    ListNode *result = solution.detectCycle(node1);
    if (result) {
        cout << "Cycle detected at node with value: " << result->val << endl;
    } else {
        cout << "No cycle detected in the linked list" << endl;
    }

    // Deallocate memory
    delete node1;
    delete node2;
    delete node3;
    delete node4;

    return 0;
}
