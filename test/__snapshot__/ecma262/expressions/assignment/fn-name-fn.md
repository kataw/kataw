# Kataw parser test case

## Input

`````js
var xFn, fn;

xFn = function x() {};
fn = function() {};
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
                            "text": "xFn",
                            "rawText": "xFn",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 7
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 7
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "fn",
                            "rawText": "fn",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 11
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 8,
                        "end": 11
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "xFn",
                    "rawText": "xFn",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 17
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 19
                },
                "right": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 28
                    },
                    "asteriskToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 28,
                        "end": 30
                    },
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 31,
                        "end": 31
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 34
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 35
                    },
                    "returnType": null,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 35
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 12,
                "end": 35
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 12,
            "end": 36
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "fn",
                    "rawText": "fn",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 36,
                    "end": 39
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 39,
                    "end": 41
                },
                "right": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 41,
                        "end": 50
                    },
                    "asteriskToken": null,
                    "name": null,
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 51,
                        "end": 51
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 54,
                            "end": 54
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 52,
                        "end": 55
                    },
                    "returnType": null,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 41,
                    "end": 55
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 36,
                "end": 55
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 36,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "var xFn, fn;\n\nxFn = function x() {};\nfn = function() {};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript
var xFn, fn;
xFn = function x() {};

fn = function () {};

```

### Diagnostics

```javascript
✔ No errors
```

