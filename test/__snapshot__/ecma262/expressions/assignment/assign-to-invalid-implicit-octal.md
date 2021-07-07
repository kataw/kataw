# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
x = 01124__________________;

x = 01____124__________________;

x = 01____124;

x = 01____124n;

x = 01124n;

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 201392130,
                    "text": 1124,
                    "rawText": "01124__________________",
                    "flags": 65632,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 27
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 31
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 33
                },
                "right": {
                    "kind": 201392130,
                    "text": 1124,
                    "rawText": "01____124__________________",
                    "flags": 65632,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 61
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 28,
                "end": 61
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 28,
            "end": 62
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 62,
                    "end": 65
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 65,
                    "end": 67
                },
                "right": {
                    "kind": 201392130,
                    "text": 1124,
                    "rawText": "01____124",
                    "flags": 65632,
                    "transformFlags": 0,
                    "start": 67,
                    "end": 77
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 62,
                "end": 77
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 62,
            "end": 78
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 78,
                    "end": 81
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 81,
                    "end": 83
                },
                "right": {
                    "kind": 201392400,
                    "text": "01____124",
                    "rawText": "01____124n",
                    "flags": 65632,
                    "transformFlags": 0,
                    "start": 83,
                    "end": 94
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 78,
                "end": 94
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 78,
            "end": 95
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 95,
                    "end": 98
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 98,
                    "end": 100
                },
                "right": {
                    "kind": 201392400,
                    "text": "01124",
                    "rawText": "01124n",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 100,
                    "end": 107
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 95,
                "end": 107
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 95,
            "end": 108
        }
    ],
    "isModule": true,
    "source": "x = 01124__________________;\n\nx = 01____124__________________;\n\nx = 01____124;\n\nx = 01____124n;\n\nx = 01124n;\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 109
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Octal literals are not allowed in strict mode - start: 5, end: 6
✖ Numeric separator can not be used after leading_0 - start: 3, end: 4
✖ Numeric separators not allowed here - start: 3, end: 9
✖ Numeric separators not allowed here - start: 3, end: 9
✖ Numeric separators not allowed here - start: 3, end: 9
✖ Numeric separators not allowed here - start: 3, end: 9
✖ Numeric separators not allowed here - start: 3, end: 9
✖ Numeric separators not allowed here - start: 3, end: 9
✖ Numeric separators not allowed here - start: 3, end: 9
✖ Numeric separators not allowed here - start: 3, end: 9
✖ Numeric separators not allowed here - start: 3, end: 9
✖ Numeric separators not allowed here - start: 3, end: 9
✖ Numeric separators not allowed here - start: 3, end: 9
✖ Numeric separators not allowed here - start: 3, end: 9
✖ Numeric separators not allowed here - start: 3, end: 9
✖ Numeric separators not allowed here - start: 3, end: 9
✖ Numeric separators not allowed here - start: 3, end: 9
✖ Numeric separators not allowed here - start: 3, end: 9
✖ Numeric separators not allowed here - start: 3, end: 9
✖ Numeric separators not allowed here - start: 3, end: 9
✖ Octal literals are not allowed in strict mode - start: 35, end: 36
✖ Numeric separator can not be used after leading_0 - start: 33, end: 34
✖ Numeric separators not allowed here - start: 33, end: 36
✖ Numeric separators not allowed here - start: 33, end: 36
✖ Numeric separators not allowed here - start: 33, end: 36
✖ Numeric separators not allowed here - start: 33, end: 36
✖ Numeric separators not allowed here - start: 33, end: 36
✖ Numeric separators not allowed here - start: 33, end: 36
✖ Numeric separators not allowed here - start: 33, end: 36
✖ Numeric separators not allowed here - start: 33, end: 36
✖ Numeric separators not allowed here - start: 33, end: 36
✖ Numeric separators not allowed here - start: 33, end: 36
✖ Numeric separators not allowed here - start: 33, end: 36
✖ Numeric separators not allowed here - start: 33, end: 36
✖ Numeric separators not allowed here - start: 33, end: 36
✖ Numeric separators not allowed here - start: 33, end: 36
✖ Numeric separators not allowed here - start: 33, end: 36
✖ Numeric separators not allowed here - start: 33, end: 36
✖ Numeric separators not allowed here - start: 33, end: 36
✖ Numeric separators not allowed here - start: 33, end: 36
✖ Numeric separators not allowed here - start: 33, end: 36
✖ Numeric separators not allowed here - start: 33, end: 36
✖ Numeric separators not allowed here - start: 33, end: 36
✖ Octal literals are not allowed in strict mode - start: 69, end: 70
✖ Numeric separator can not be used after leading_0 - start: 67, end: 68
✖ Numeric separators not allowed here - start: 67, end: 70
✖ Numeric separators not allowed here - start: 67, end: 70
✖ Numeric separators not allowed here - start: 67, end: 70
✖ Octal literals are not allowed in strict mode - start: 85, end: 86
✖ Numeric separator can not be used after leading_0 - start: 83, end: 84
✖ Numeric separators not allowed here - start: 83, end: 86
✖ Numeric separators not allowed here - start: 83, end: 86
✖ Numeric separators not allowed here - start: 83, end: 86
✖ Octal literals are not allowed in strict mode - start: 102, end: 103

```

