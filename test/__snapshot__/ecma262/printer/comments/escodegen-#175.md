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
                    "transformFlags": 0,
                    "start": 0,
                    "end": 4
                },
                "operatorToken": {
                    "kind": 201360950,
                    "flags": 96,
                    "transformFlags": 32,
                    "start": 4,
                    "end": 9
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 134318643,
                        "flags": 96,
                        "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 10,
                            "end": 14
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "js",
                            "rawText": "js",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 17
                        },
                        "flags": 96,
                        "transformFlags": 2,
                        "start": 10,
                        "end": 17
                    },
                    "flags": 32,
                    "transformFlags": 16384,
                    "start": 9,
                    "end": 17
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "test/**/*-test.js",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
test /**/ * -test.js;
```

### Diagnostics

```javascript
✔ No errors
```

