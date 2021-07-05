while-statement6# Kataw parser test case

## Input

`````js
test/**/*-test.js
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
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "test",
                    "rawText": "test",
                    "flags": 96,
                    "start": 0,
                    "end": 4
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 96,
                    "start": 4,
                    "end": 9
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 134318643,
                        "flags": 96,
                        "start": 9,
                        "end": 10
                    },
                    "operand": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "test",
                            "rawText": "test",
                            "flags": 96,
                            "start": 10,
                            "end": 14
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "js",
                            "rawText": "js",
                            "flags": 96,
                            "start": 15,
                            "end": 17
                        },
                        "flags": 96,
                        "start": 10,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 9,
                    "end": 17
                },
                "flags": 96,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "test/**/*-test.js",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

test *  -test.js;
```

### Diagnostics

```javascript
✔ No errors
```

