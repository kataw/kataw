# Kataw parser test case

## Input

`````js
var $ = 1;
var $\u200D = 2;
var $\u200C = 3;

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "$",
                            "rawText": "$",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 7,
                            "end": 9
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 10,
                "end": 14
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "$‍",
                            "rawText": "$\\u200D",
                            "flags": 96,
                            "start": 14,
                            "end": 22
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 24,
                            "end": 26
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 26
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 26
            },
            "flags": 16,
            "start": 10,
            "end": 27
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 27,
                "end": 31
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "$‌",
                            "rawText": "$\\u200C",
                            "flags": 96,
                            "start": 31,
                            "end": 39
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "start": 41,
                            "end": 43
                        },
                        "flags": 16,
                        "start": 31,
                        "end": 43
                    }
                ],
                "flags": 16,
                "start": 31,
                "end": 43
            },
            "flags": 16,
            "start": 27,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "var $ = 1;\nvar $\\u200D = 2;\nvar $\\u200C = 3;\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

var $ = 1;
var $\u200D = 2;
var $\u200C = 3;

```

### Diagnostics

```javascript
✔ No errors
```

