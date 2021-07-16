# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: true }
`````

## Input

`````js
var expr: any;
for (var a: number in expr) {
}
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
                "transformFlags": 0,
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
                            "text": "expr",
                            "rawText": "expr",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 8
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234252,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 13
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 13
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 13
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 14
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "transformFlags": 0,
                "start": 14,
                "end": 18
            },
            "initializer": {
                "kind": 341,
                "varKeyword": {
                    "kind": 37757002,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 23
                },
                "declarationList": {
                    "kind": 156,
                    "declarations": [
                        {
                            "kind": 157,
                            "binding": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 25
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 26,
                                    "end": 33
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 33
                            },
                            "initializer": null,
                            "flags": 16,
                            "transformFlags": 4224,
                            "start": 23,
                            "end": 33
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 33
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 14,
                "end": 36
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "transformFlags": 8192,
                "start": 33,
                "end": 36
            },
            "expression": {
                "kind": 134299649,
                "text": "expr",
                "rawText": "expr",
                "flags": 96,
                "transformFlags": 0,
                "start": 36,
                "end": 41
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 44,
                    "end": 44
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 42,
                "end": 46
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 14,
            "end": 46
        }
    ],
    "isModule": true,
    "source": "var expr: any;\nfor (var a: number in expr) {\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
var expr: any;
for (var a: number in expr) {}

```

### Diagnostics

```javascript
✔ No errors
```

