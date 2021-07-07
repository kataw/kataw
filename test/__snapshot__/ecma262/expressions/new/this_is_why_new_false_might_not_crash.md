# Kataw parser test case

## Input

`````js
new false.__proto__.constructor
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
                "kind": 129,
                "member": {
                    "kind": 129,
                    "member": {
                        "kind": 210,
                        "newKeyword": {
                            "kind": 138477661,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 3
                        },
                        "expression": {
                            "kind": 205586437,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 9
                        },
                        "argumentList": null,
                        "flags": 96,
                        "transformFlags": 2048,
                        "start": 0,
                        "end": 9
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "__proto__",
                        "rawText": "__proto__",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 19
                    },
                    "flags": 96,
                    "transformFlags": 2,
                    "start": 0,
                    "end": 19
                },
                "expression": {
                    "kind": 134299649,
                    "text": "constructor",
                    "rawText": "constructor",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 31
                },
                "flags": 96,
                "transformFlags": 2,
                "start": 0,
                "end": 31
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "new false.__proto__.constructor",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
new false.__proto__.constructor;
```

### Diagnostics

```javascript
✔ No errors
```

