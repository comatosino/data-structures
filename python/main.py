from queue.two_stack_queue import TwoStackQueue

if __name__ == "__main__":
    q = TwoStackQueue()
    q.enqueue(1)
    q.enqueue(2)
    print({"new": str(q.new), "old": str(q.old)})
    print(q.peek())
    q.enqueue(3)
    q.enqueue(4)
    print({"new": str(q.new), "old": str(q.old)})
    q.dequeue()
    print(q.dequeue())
    print(q)
