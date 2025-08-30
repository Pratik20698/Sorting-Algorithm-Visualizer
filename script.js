class SortVisualizer {
    constructor() {
        this.array = [];
        this.arraySize = 50;
        this.speed = 50;
        this.algorithm = 'bubbleSort';
        this.isRunning = false;
        this.isPaused = false;
        this.currentStep = 0;
        this.totalSteps = 0;
        this.steps = [];
        this.timeoutId = null;
        this.selectedLanguage = 'javascript';
        
        this.algorithms = {
            bubbleSort: 'Bubble Sort',
            selectionSort: 'Selection Sort',
            insertionSort: 'Insertion Sort',
            mergeSort: 'Merge Sort',
            quickSort: 'Quick Sort',
            heapSort: 'Heap Sort'
        };

        this.algorithmInfo = {
            bubbleSort: {
                timeComplexity: 'O(n²)',
                spaceComplexity: 'O(1)',
                description: 'Repeatedly compares adjacent elements and swaps them if they are in wrong order.',
                code: {
                    c: `void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}`,
                    cpp: `void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr[j], arr[j+1]);
            }
        }
    }
}`,
                    java: `public static void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}`,
                    python: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n-1):
        for j in range(n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]`,
                    javascript: `function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
}`
                }
            },
            selectionSort: {
                timeComplexity: 'O(n²)',
                spaceComplexity: 'O(1)',
                description: 'Finds the minimum element and places it at the beginning, then repeats for remaining elements.',
                code: {
                    c: `void selectionSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        int min_idx = i;
        for (int j = i+1; j < n; j++) {
            if (arr[j] < arr[min_idx])
                min_idx = j;
        }
        int temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}`,
                    cpp: `void selectionSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n-1; i++) {
        int min_idx = i;
        for (int j = i+1; j < n; j++) {
            if (arr[j] < arr[min_idx])
                min_idx = j;
        }
        swap(arr[min_idx], arr[i]);
    }
}`,
                    java: `public static void selectionSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n-1; i++) {
        int min_idx = i;
        for (int j = i+1; j < n; j++) {
            if (arr[j] < arr[min_idx])
                min_idx = j;
        }
        int temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}`,
                    python: `def selection_sort(arr):
    n = len(arr)
    for i in range(n-1):
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]`,
                    javascript: `function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n-1; i++) {
        let min_idx = i;
        for (let j = i+1; j < n; j++) {
            if (arr[j] < arr[min_idx])
                min_idx = j;
        }
        [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];
    }
}`
                }
            },
            insertionSort: {
                timeComplexity: 'O(n²)',
                spaceComplexity: 'O(1)',
                description: 'Builds the sorted array one element at a time by inserting each element into its correct position.',
                code: {
                    c: `void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}`,
                    cpp: `void insertionSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}`,
                    java: `public static void insertionSort(int[] arr) {
    int n = arr.length;
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}`,
                    python: `def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key`,
                    javascript: `function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}`
                }
            },
            mergeSort: {
                timeComplexity: 'O(n log n)',
                spaceComplexity: 'O(n)',
                description: 'Divides the array into halves, sorts them recursively, then merges the sorted halves.',
                code: {
                    c: `void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1, n2 = r - m;
    int L[n1], R[n2];
    for (int i = 0; i < n1; i++) L[i] = arr[l + i];
    for (int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}

void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}`,
                    cpp: `void merge(vector<int>& arr, int l, int m, int r) {
    vector<int> L(arr.begin() + l, arr.begin() + m + 1);
    vector<int> R(arr.begin() + m + 1, arr.begin() + r + 1);
    int i = 0, j = 0, k = l;
    while (i < L.size() && j < R.size()) {
        if (L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }
    while (i < L.size()) arr[k++] = L[i++];
    while (j < R.size()) arr[k++] = R[j++];
}

void mergeSort(vector<int>& arr, int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}`,
                    java: `public static void merge(int[] arr, int l, int m, int r) {
    int n1 = m - l + 1, n2 = r - m;
    int[] L = new int[n1], R = new int[n2];
    System.arraycopy(arr, l, L, 0, n1);
    System.arraycopy(arr, m + 1, R, 0, n2);
    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}

public static void mergeSort(int[] arr, int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}`,
                    python: `def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]
        merge_sort(L)
        merge_sort(R)
        i = j = k = 0
        while i < len(L) and j < len(R):
            if L[i] <= R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1
        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1`,
                    javascript: `function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    let result = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}`
                }
            },
            quickSort: {
                timeComplexity: 'O(n log n)',
                spaceComplexity: 'O(log n)',
                description: 'Selects a pivot element and partitions the array around it, then recursively sorts subarrays.',
                code: {
                    c: `int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return (i + 1);
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`,
                    cpp: `int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return (i + 1);
}

void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`,
                    java: `public static int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return (i + 1);
}

public static void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`,
                    python: `def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1`,
                    javascript: `function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}`
                }
            },
            heapSort: {
                timeComplexity: 'O(n log n)',
                spaceComplexity: 'O(1)',
                description: 'Builds a max heap from the array, then repeatedly extracts the maximum element.',
                code: {
                    c: `void heapify(int arr[], int n, int i) {
    int largest = i, left = 2*i + 1, right = 2*i + 2;
    if (left < n && arr[left] > arr[largest])
        largest = left;
    if (right < n && arr[right] > arr[largest])
        largest = right;
    if (largest != i) {
        int temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        heapify(arr, n, largest);
    }
}

void heapSort(int arr[], int n) {
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);
    for (int i = n - 1; i > 0; i--) {
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0);
    }
}`,
                    cpp: `void heapify(vector<int>& arr, int n, int i) {
    int largest = i, left = 2*i + 1, right = 2*i + 2;
    if (left < n && arr[left] > arr[largest])
        largest = left;
    if (right < n && arr[right] > arr[largest])
        largest = right;
    if (largest != i) {
        swap(arr[i], arr[largest]);
        heapify(arr, n, largest);
    }
}

void heapSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);
    for (int i = n - 1; i > 0; i--) {
        swap(arr[0], arr[i]);
        heapify(arr, i, 0);
    }
}`,
                    java: `public static void heapify(int[] arr, int n, int i) {
    int largest = i, left = 2*i + 1, right = 2*i + 2;
    if (left < n && arr[left] > arr[largest])
        largest = left;
    if (right < n && arr[right] > arr[largest])
        largest = right;
    if (largest != i) {
        int temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        heapify(arr, n, largest);
    }
}

public static void heapSort(int[] arr) {
    int n = arr.length;
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);
    for (int i = n - 1; i > 0; i--) {
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0);
    }
}`,
                    python: `def heapify(arr, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2
    if left < n and arr[left] > arr[largest]:
        largest = left
    if right < n and arr[right] > arr[largest]:
        largest = right
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heap_sort(arr):
    n = len(arr)
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        heapify(arr, i, 0)`,
                    javascript: `function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < n && arr[left] > arr[largest])
        largest = left;
    if (right < n && arr[right] > arr[largest])
        largest = right;
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

function heapSort(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
        heapify(arr, n, i);
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
}`
                }
            }
        };

        this.init();
    }

    init() {
        this.generateArray();
        this.setupEventListeners();
        this.updateAlgorithmInfo();
    }

    generateArray() {
        this.array = Array.from({ length: this.arraySize }, () => 
            Math.floor(Math.random() * 380) + 20
        );
        this.renderBars();
        this.resetState();
    }

    renderBars() {
        const container = document.getElementById('bars-container');
        container.innerHTML = '';
        
        const maxHeight = Math.max(...this.array);
        const barWidth = Math.max(800 / this.array.length - 1, 2);
        
        this.array.forEach((value, index) => {
            const bar = document.createElement('div');
            bar.className = 'bar unsorted';
            bar.style.height = `${(value / maxHeight) * 350}px`;
            bar.style.width = `${barWidth}px`;
            bar.id = `bar-${index}`;
            
            if (this.array.length <= 20) {
                const valueLabel = document.createElement('div');
                valueLabel.className = 'bar-value';
                valueLabel.textContent = value;
                bar.appendChild(valueLabel);
            }
            
            container.appendChild(bar);
        });
    }

    resetState() {
        this.currentStep = 0;
        this.totalSteps = 0;
        this.steps = [];
        document.getElementById('progress-container').style.display = 'none';
        
        // Reset all bars to unsorted state
        document.querySelectorAll('.bar').forEach(bar => {
            bar.className = 'bar unsorted';
        });
    }

    setupEventListeners() {
        // Algorithm selection
        document.getElementById('algorithm-select').addEventListener('change', (e) => {
            this.algorithm = e.target.value;
            this.updateAlgorithmInfo();
            this.updateCodeDisplay();
        });

        // Array size
        document.getElementById('size-slider').addEventListener('input', (e) => {
            this.arraySize = parseInt(e.target.value);
            document.getElementById('size-value').textContent = this.arraySize;
            if (!this.isRunning) {
                this.generateArray();
            }
        });

        // Speed
        document.getElementById('speed-slider').addEventListener('input', (e) => {
            this.speed = parseInt(e.target.value);
            document.getElementById('speed-value').textContent = this.speed;
        });

        // Control buttons
        document.getElementById('start-btn').addEventListener('click', () => this.startSort());
        document.getElementById('pause-btn').addEventListener('click', () => this.pauseSort());
        document.getElementById('resume-btn').addEventListener('click', () => this.resumeSort());
        document.getElementById('reset-btn').addEventListener('click', () => this.resetSort());

        // Info and code panels
        document.getElementById('info-btn').addEventListener('click', () => this.toggleInfo());
        document.getElementById('code-btn').addEventListener('click', () => this.toggleCode());

        // Language selection
        document.getElementById('language-select').addEventListener('change', (e) => {
            this.selectedLanguage = e.target.value;
            this.updateCodeDisplay();
        });
    }

    updateAlgorithmInfo() {
        const info = this.algorithmInfo[this.algorithm];
        document.getElementById('info-title').textContent = this.algorithms[this.algorithm];
        document.getElementById('time-complexity').textContent = info.timeComplexity;
        document.getElementById('space-complexity').textContent = info.spaceComplexity;
        document.getElementById('algorithm-description').textContent = info.description;
        document.getElementById('code-title').textContent = `${this.algorithms[this.algorithm]} Implementation`;
        this.updateCodeDisplay();
    }

    updateCodeDisplay() {
        const code = this.algorithmInfo[this.algorithm].code[this.selectedLanguage];
        document.getElementById('code-display').textContent = code;
    }

    toggleInfo() {
        const panel = document.getElementById('info-panel');
        const btn = document.getElementById('info-btn');
        const isVisible = panel.style.display !== 'none';
        
        panel.style.display = isVisible ? 'none' : 'block';
        btn.innerHTML = isVisible ? '<i class="fas fa-info-circle"></i> Show Info' : '<i class="fas fa-info-circle"></i> Hide Info';
    }

    toggleCode() {
        const panel = document.getElementById('code-panel');
        const btn = document.getElementById('code-btn');
        const isVisible = panel.style.display !== 'none';
        
        panel.style.display = isVisible ? 'none' : 'block';
        btn.innerHTML = isVisible ? '<i class="fas fa-code"></i> Show Code' : '<i class="fas fa-code"></i> Hide Code';
    }

    startSort() {
        const arrayCopy = [...this.array];
        let steps = [];
        
        switch (this.algorithm) {
            case 'bubbleSort':
                steps = this.bubbleSort(arrayCopy);
                break;
            case 'selectionSort':
                steps = this.selectionSort(arrayCopy);
                break;
            case 'insertionSort':
                steps = this.insertionSort(arrayCopy);
                break;
            case 'mergeSort':
                steps = this.mergeSort(arrayCopy);
                break;
            case 'quickSort':
                steps = this.quickSort(arrayCopy);
                break;
            case 'heapSort':
                steps = this.heapSort(arrayCopy);
                break;
        }
        
        this.steps = steps;
        this.totalSteps = steps.length;
        this.currentStep = 0;
        this.isRunning = true;
        this.isPaused = false;
        
        document.getElementById('start-btn').style.display = 'none';
        document.getElementById('pause-btn').style.display = 'inline-flex';
        document.getElementById('progress-container').style.display = 'block';
        
        this.animateSort();
    }

    pauseSort() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
        this.isRunning = false;
        this.isPaused = true;
        
        document.getElementById('pause-btn').style.display = 'none';
        document.getElementById('resume-btn').style.display = 'inline-flex';
    }

    resumeSort() {
        this.isRunning = true;
        this.isPaused = false;
        
        document.getElementById('resume-btn').style.display = 'none';
        document.getElementById('pause-btn').style.display = 'inline-flex';
        
        this.animateSort();
    }

    resetSort() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
        this.isRunning = false;
        this.isPaused = false;
        
        document.getElementById('start-btn').style.display = 'inline-flex';
        document.getElementById('pause-btn').style.display = 'none';
        document.getElementById('resume-btn').style.display = 'none';
        
        this.generateArray();
    }

    animateSort() {
        const animate = () => {
            if (this.currentStep >= this.totalSteps) {
                this.isRunning = false;
                document.getElementById('start-btn').style.display = 'inline-flex';
                document.getElementById('pause-btn').style.display = 'none';
                
                // Mark all as sorted
                document.querySelectorAll('.bar').forEach(bar => {
                    bar.className = 'bar sorted';
                });
                return;
            }
            
            const step = this.steps[this.currentStep];
            this.array = [...step.array];
            this.currentStep++;
            
            // Update progress
            document.getElementById('progress-text').textContent = `${this.currentStep} / ${this.totalSteps}`;
            document.getElementById('progress-fill').style.width = `${(this.currentStep / this.totalSteps) * 100}%`;
            
            // Reset all bars
            document.querySelectorAll('.bar').forEach((bar, index) => {
                bar.className = 'bar unsorted';
                const maxHeight = Math.max(...this.array);
                bar.style.height = `${(this.array[index] / maxHeight) * 350}px`;
                
                if (this.array.length <= 20) {
                    const valueLabel = bar.querySelector('.bar-value');
                    if (valueLabel) {
                        valueLabel.textContent = this.array[index];
                    }
                }
            });
            
            // Apply step-specific styling
            if (step.type === 'compare') {
                step.indices.forEach(index => {
                    const bar = document.getElementById(`bar-${index}`);
                    if (bar) bar.className = 'bar comparing';
                });
            } else if (step.type === 'swap') {
                step.indices.forEach(index => {
                    const bar = document.getElementById(`bar-${index}`);
                    if (bar) bar.className = 'bar swapping';
                });
            } else if (step.type === 'sorted') {
                step.indices.forEach(index => {
                    const bar = document.getElementById(`bar-${index}`);
                    if (bar) bar.className = 'bar sorted';
                });
            }
            
            this.timeoutId = setTimeout(animate, 101 - this.speed);
        };
        
        animate();
    }

    // Sorting algorithm implementations
    bubbleSort(arr) {
        const steps = [];
        const n = arr.length;
        
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                steps.push({ type: 'compare', indices: [j, j + 1], array: [...arr] });
                
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    steps.push({ type: 'swap', indices: [j, j + 1], array: [...arr] });
                }
            }
            steps.push({ type: 'sorted', indices: [n - i - 1], array: [...arr] });
        }
        steps.push({ type: 'sorted', indices: [0], array: [...arr] });
        return steps;
    }

    selectionSort(arr) {
        const steps = [];
        const n = arr.length;
        
        for (let i = 0; i < n - 1; i++) {
            let minIdx = i;
            
            for (let j = i + 1; j < n; j++) {
                steps.push({ type: 'compare', indices: [minIdx, j], array: [...arr] });
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            }
            
            if (minIdx !== i) {
                [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
                steps.push({ type: 'swap', indices: [i, minIdx], array: [...arr] });
            }
            
            steps.push({ type: 'sorted', indices: [i], array: [...arr] });
        }
        steps.push({ type: 'sorted', indices: [n - 1], array: [...arr] });
        return steps;
    }

    insertionSort(arr) {
        const steps = [];
        
        for (let i = 1; i < arr.length; i++) {
            let key = arr[i];
            let j = i - 1;
            
            while (j >= 0 && arr[j] > key) {
                steps.push({ type: 'compare', indices: [j, j + 1], array: [...arr] });
                arr[j + 1] = arr[j];
                steps.push({ type: 'swap', indices: [j, j + 1], array: [...arr] });
                j--;
            }
            
            arr[j + 1] = key;
            steps.push({ type: 'sorted', indices: [j + 1], array: [...arr] });
        }
        return steps;
    }

    mergeSort(arr) {
        const steps = [];
        
        const merge = (left, right, start) => {
            const result = [];
            let i = 0, j = 0;
            
            while (i < left.length && j < right.length) {
                steps.push({ type: 'compare', indices: [start + i, start + left.length + j], array: [...arr] });
                
                if (left[i] <= right[j]) {
                    result.push(left[i]);
                    i++;
                } else {
                    result.push(right[j]);
                    j++;
                }
            }
            
            while (i < left.length) {
                result.push(left[i]);
                i++;
            }
            
            while (j < right.length) {
                result.push(right[j]);
                j++;
            }
            
            for (let k = 0; k < result.length; k++) {
                arr[start + k] = result[k];
                steps.push({ type: 'sorted', indices: [start + k], array: [...arr] });
            }
            
            return result;
        };
        
        const mergeSortHelper = (start, end) => {
            if (start >= end) return;
            
            const mid = Math.floor((start + end) / 2);
            mergeSortHelper(start, mid);
            mergeSortHelper(mid + 1, end);
            
            const left = arr.slice(start, mid + 1);
            const right = arr.slice(mid + 1, end + 1);
            merge(left, right, start);
        };
        
        mergeSortHelper(0, arr.length - 1);
        return steps;
    }

    quickSort(arr) {
        const steps = [];
        
        const partition = (low, high) => {
            const pivot = arr[high];
            let i = low - 1;
            
            for (let j = low; j < high; j++) {
                steps.push({ type: 'compare', indices: [j, high], array: [...arr] });
                
                if (arr[j] < pivot) {
                    i++;
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    steps.push({ type: 'swap', indices: [i, j], array: [...arr] });
                }
            }
            
            [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
            steps.push({ type: 'swap', indices: [i + 1, high], array: [...arr] });
            
            return i + 1;
        };
        
        const quickSortHelper = (low, high) => {
            if (low < high) {
                const pi = partition(low, high);
                steps.push({ type: 'sorted', indices: [pi], array: [...arr] });
                
                quickSortHelper(low, pi - 1);
                quickSortHelper(pi + 1, high);
            }
        };
        
        quickSortHelper(0, arr.length - 1);
        return steps;
    }

    heapSort(arr) {
        const steps = [];
        
        const heapify = (n, i) => {
            let largest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;
            
            if (left < n) {
                steps.push({ type: 'compare', indices: [left, largest], array: [...arr] });
                if (arr[left] > arr[largest]) {
                    largest = left;
                }
            }
            
            if (right < n) {
                steps.push({ type: 'compare', indices: [right, largest], array: [...arr] });
                if (arr[right] > arr[largest]) {
                    largest = right;
                }
            }
            
            if (largest !== i) {
                [arr[i], arr[largest]] = [arr[largest], arr[i]];
                steps.push({ type: 'swap', indices: [i, largest], array: [...arr] });
                heapify(n, largest);
            }
        };
        
        const n = arr.length;
        
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heapify(n, i);
        }
        
        for (let i = n - 1; i > 0; i--) {
            [arr[0], arr[i]] = [arr[i], arr[0]];
            steps.push({ type: 'swap', indices: [0, i], array: [...arr] });
            steps.push({ type: 'sorted', indices: [i], array: [...arr] });
            heapify(i, 0);
        }
        
        steps.push({ type: 'sorted', indices: [0], array: [...arr] });
        return steps;
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new SortVisualizer();
});