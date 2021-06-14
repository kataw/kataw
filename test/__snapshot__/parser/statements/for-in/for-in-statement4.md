# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: true }
`````

## Input

`````js
var a: number;
var expr: any;
for (a in expr) {
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
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "start": 6,
                                "end": 13
                            },
                            "flags": 2097152,
                            "start": 6,
                            "end": 13
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 13
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 14
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 14,
                "end": 18
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
                            "start": 18,
                            "end": 23
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234252,
                                "flags": 2097216,
                                "start": 24,
                                "end": 28
                            },
                            "flags": 2097152,
                            "start": 24,
                            "end": 28
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 18,
                        "end": 28
                    }
                ],
                "flags": 16,
                "start": 18,
                "end": 28
            },
            "flags": 16,
            "start": 14,
            "end": 29
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 29,
                "end": 33
            },
            "initializer": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 35,
                "end": 36
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 36,
                "end": 39
            },
            "expression": {
                "kind": 134299649,
                "text": "expr",
                "rawText": "expr",
                "flags": 96,
                "start": 39,
                "end": 44
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 17,
                    "start": 47,
                    "end": 47
                },
                "flags": 16,
                "start": 45,
                "end": 49
            },
            "flags": 81,
            "start": 29,
            "end": 49
        }
    ],
    "isModule": true,
    "source": "var a: number;\nvar expr: any;\nfor (a in expr) {\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

var a;
var expr;
for (a in expr)
  {}
```

### Diagnostics

```javascript
✔ No errors
```

