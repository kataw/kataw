# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: true }
`````

## Input

`````js
var a: any;
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
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234252,
                                "flags": 2097216,
                                "start": 6,
                                "end": 10
                            },
                            "flags": 2097152,
                            "start": 6,
                            "end": 10
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 10
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 11
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 11,
                "end": 15
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
                            "start": 15,
                            "end": 20
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234252,
                                "flags": 2097216,
                                "start": 21,
                                "end": 25
                            },
                            "flags": 2097152,
                            "start": 21,
                            "end": 25
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 15,
                        "end": 25
                    }
                ],
                "flags": 16,
                "start": 15,
                "end": 25
            },
            "flags": 16,
            "start": 11,
            "end": 26
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 26,
                "end": 30
            },
            "initializer": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 32,
                "end": 33
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 33,
                "end": 36
            },
            "expression": {
                "kind": 134299649,
                "text": "expr",
                "rawText": "expr",
                "flags": 96,
                "start": 36,
                "end": 41
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 17,
                    "start": 44,
                    "end": 44
                },
                "flags": 16,
                "start": 42,
                "end": 46
            },
            "flags": 81,
            "start": 26,
            "end": 46
        }
    ],
    "isModule": true,
    "source": "var a: any;\nvar expr: any;\nfor (a in expr) {\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

 var a any; var expr any; for (a in expr) {  } 
```

### Diagnostics

```javascript
✔ No errors
```

