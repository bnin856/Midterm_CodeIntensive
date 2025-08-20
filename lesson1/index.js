import {
    productInfo,
    greet,
    sumUpTo,
    square,
    isEven,
    firstElement,
    sum,
    extractUserInfo,
    getNames,
    stringLength,
    toUpperCase,
    formatCurrency,
    max,
    isPrime,
    repeatString,
    sumOdd,
    sumGreaterThan,
    formatDate,
    firstThree,
    containsChar,
    mergeArrays,
    countOccurrences,
    filterOdd,
    greaterThan,
    factorial,
    separateEvenOdd,
    sortAsc,
    sumEvenIndex,
    multiplyByTwo,
    arrayToString
} from './utils.js';

// Global functions để có thể gọi từ HTML
window.testBai1 = function() {
    const result = productInfo("Sách", 20000);
    showResult('result1', result, 'success');
};

window.testBai2 = function() {
    const result = greet("An");
    showResult('result2', result, 'success');
};

window.testBai3 = function() {
    const result = sumUpTo(5);
    showResult('result3', result, 'success');
};

window.testBai4 = function() {
    const result = square(6);
    showResult('result4', result, 'success');
};

window.testBai5 = function() {
    const result = isEven(7);
    showResult('result5', result, 'success');
};

window.testBai6 = function() {
    const result = firstElement([1, 2, 3]);
    showResult('result6', result, 'success');
};

window.testBai7 = function() {
    const result = sum(1, 2, 3, 4);
    showResult('result7', result, 'success');
};

window.testBai8 = function() {
    const user = { name: "Nam", age: 30 };
    const result = extractUserInfo(user);
    showResult('result8', result, 'success');
};

window.testBai9 = function() {
    const people = [{ name: "An" }, { name: "Bình" }];
    const result = getNames(people);
    showResult('result9', result, 'success');
};

window.testBai10 = function() {
    const result = stringLength("Hello World");
    showResult('result10', result, 'success');
};

window.testBai11 = function() {
    const result = toUpperCase("javascript");
    showResult('result11', result, 'success');
};

window.testBai12 = function() {
    const result = formatCurrency(1000000);
    showResult('result12', result, 'success');
};

window.testBai13 = function() {
    const result = max([10, 5, 20, 8]);
    showResult('result13', result, 'success');
};

window.testBai14 = function() {
    const result = isPrime(7);
    showResult('result14', result, 'success');
};

window.testBai15 = function() {
    const result = repeatString("Hello", 3);
    showResult('result15', result, 'success');
};

window.testBai16 = function() {
    const result = sumOdd([1, 2, 3, 4]);
    showResult('result16', result, 'success');
};

window.testBai17 = function() {
    const result = sumGreaterThan([1, 2, 3, 4], 2);
    showResult('result17', result, 'success');
};

window.testBai18 = function() {
    const result = formatDate("2024-11-28");
    showResult('result18', result, 'success');
};

window.testBai19 = function() {
    const result = firstThree([1, 2, 3, 4, 5]);
    showResult('result19', JSON.stringify(result), 'success');
};

window.testBai20 = function() {
    const result = containsChar("javascript", "j");
    showResult('result20', result, 'success');
};

window.testBai21 = function() {
    const result = mergeArrays([1, 2], [3, 4]);
    showResult('result21', JSON.stringify(result), 'success');
};

window.testBai22 = function() {
    const result = countOccurrences([1, 2, 2, 3, 2], 2);
    showResult('result22', result, 'success');
};

window.testBai23 = function() {
    const result = filterOdd([1, 2, 3, 4]);
    showResult('result23', JSON.stringify(result), 'success');
};

window.testBai24 = function() {
    const result = greaterThan([1, 2, 3, 4], 2);
    showResult('result24', JSON.stringify(result), 'success');
};

window.testBai25 = function() {
    const result = factorial(5);
    showResult('result25', result, 'success');
};

window.testBai26 = function() {
    const result = separateEvenOdd([1, 2, 3, 4]);
    showResult('result26', JSON.stringify(result, null, 2), 'success');
};

window.testBai27 = function() {
    const result = sortAsc([3, 1, 4, 2]);
    showResult('result27', JSON.stringify(result), 'success');
};

window.testBai28 = function() {
    const result = sumEvenIndex([1, 2, 3, 4]);
    showResult('result28', result, 'success');
};

window.testBai29 = function() {
    const result = multiplyByTwo([1, 2, 3]);
    showResult('result29', JSON.stringify(result), 'success');
};

window.testBai30 = function() {
    const result = arrayToString(["a", "b", "c"]);
    showResult('result30', result, 'success');
};

// Utility functions
function showResult(elementId, result, type) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = `Kết quả: ${result}`;
        element.className = `result show ${type}`;
    }
}

function clearAllResults() {
    const results = document.querySelectorAll('.result');
    results.forEach(result => {
        result.textContent = '';
        result.className = 'result';
    });
}

function runAllTests() {
    clearAllResults();
    
    // Chạy tất cả tests với delay để tạo hiệu ứng
    const tests = [
        () => testBai1(),
        () => testBai2(),
        () => testBai3(),
        () => testBai4(),
        () => testBai5(),
        () => testBai6(),
        () => testBai7(),
        () => testBai8(),
        () => testBai9(),
        () => testBai10(),
        () => testBai11(),
        () => testBai12(),
        () => testBai13(),
        () => testBai14(),
        () => testBai15(),
        () => testBai16(),
        () => testBai17(),
        () => testBai18(),
        () => testBai19(),
        () => testBai20(),
        () => testBai21(),
        () => testBai22(),
        () => testBai23(),
        () => testBai24(),
        () => testBai25(),
        () => testBai26(),
        () => testBai27(),
        () => testBai28(),
        () => testBai29(),
        () => testBai30()
    ];

    tests.forEach((test, index) => {
        setTimeout(() => {
            test();
        }, index * 100);
    });
}

function testConsole() {
    console.log("=== TESTING ALL FUNCTIONS IN CONSOLE ===");
    
    // Test tất cả functions
    console.log("Bài 1:", productInfo("Sách", 20000));
    console.log("Bài 2:", greet("An"));
    console.log("Bài 3:", sumUpTo(5));
    console.log("Bài 4:", square(6));
    console.log("Bài 5:", isEven(7));
    console.log("Bài 6:", firstElement([1, 2, 3]));
    console.log("Bài 7:", sum(1, 2, 3, 4));
    
    const user = { name: "Nam", age: 30 };
    console.log("Bài 8:", extractUserInfo(user));
    
    const people = [{ name: "An" }, { name: "Bình" }];
    console.log("Bài 9:", getNames(people));
    
    console.log("Bài 10:", stringLength("Hello World"));
    console.log("Bài 11:", toUpperCase("javascript"));
    console.log("Bài 12:", formatCurrency(1000000));
    console.log("Bài 13:", max([10, 5, 20, 8]));
    console.log("Bài 14:", isPrime(7));
    console.log("Bài 15:", repeatString("Hello", 3));
    console.log("Bài 16:", sumOdd([1, 2, 3, 4]));
    console.log("Bài 17:", sumGreaterThan([1, 2, 3, 4], 2));
    console.log("Bài 18:", formatDate("2024-11-28"));
    console.log("Bài 19:", firstThree([1, 2, 3, 4, 5]));
    console.log("Bài 20:", containsChar("javascript", "j"));
    console.log("Bài 21:", mergeArrays([1, 2], [3, 4]));
    console.log("Bài 22:", countOccurrences([1, 2, 2, 3, 2], 2));
    console.log("Bài 23:", filterOdd([1, 2, 3, 4]));
    console.log("Bài 24:", greaterThan([1, 2, 3, 4], 2));
    console.log("Bài 25:", factorial(5));
    console.log("Bài 26:", separateEvenOdd([1, 2, 3, 4]));
    console.log("Bài 27:", sortAsc([3, 1, 4, 2]));
    console.log("Bài 28:", sumEvenIndex([1, 2, 3, 4]));
    console.log("Bài 29:", multiplyByTwo([1, 2, 3]));
    console.log("Bài 30:", arrayToString(["a", "b", "c"]));
    
    console.log("=== HOÀN THÀNH TẤT CẢ TESTS ===");
    alert("Đã chạy tất cả tests trong console! Mở Developer Tools để xem kết quả.");
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const runAllBtn = document.getElementById('runAllBtn');
    const clearBtn = document.getElementById('clearBtn');
    const testBtn = document.getElementById('testBtn');

    if (runAllBtn) {
        runAllBtn.addEventListener('click', runAllTests);
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', clearAllResults);
    }

    if (testBtn) {
        testBtn.addEventListener('click', testConsole);
    }

    console.log("30 Bài tập JavaScript đã sẵn sàng!");
    console.log("Sử dụng các nút để test từng bài hoặc chạy tất cả cùng lúc.");
}); 