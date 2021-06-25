# Kataw parser test case

## Input

`````js
function f(){ foo + new.target }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 11
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 17
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 17,
                                    "end": 19
                                },
                                "right": {
                                    "kind": 211,
                                    "newKeyword": {
                                        "kind": 138477661,
                                        "flags": 96,
                                        "start": 19,
                                        "end": 23
                                    },
                                    "targetIdentifier": {
                                        "kind": 16594,
                                        "flags": 96,
                                        "start": 24,
                                        "end": 30
                                    },
                                    "flags": 96,
                                    "start": 19,
                                    "end": 30
                                },
                                "flags": 32,
                                "start": 13,
                                "end": 30
                            },
                            "flags": 16,
                            "start": 13,
                            "end": 30
                        }
                    ],
                    "flags": 32,
                    "start": 13,
                    "end": 30
                },
                "flags": 32,
                "start": 12,
                "end": 32
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "function f(){ foo + new.target }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

function f() {
  foo + ;
}
```

### Diagnostics

```javascript
✔ No errors
```

