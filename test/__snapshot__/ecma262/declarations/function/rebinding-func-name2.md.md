# Kataw parser test case

## Input

`````js
x=function f(){ var f }
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
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1,
                    "end": 2
                },
                "right": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 2,
                        "end": 10
                    },
                    "asteriskToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "start": 10,
                        "end": 12
                    },
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 13,
                        "end": 13
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [
                                {
                                    "kind": 155,
                                    "declareKeyword": null,
                                    "varKeyword": {
                                        "kind": 37757002,
                                        "flags": 80,
                                        "start": 15,
                                        "end": 19
                                    },
                                    "declarationList": {
                                        "kind": 156,
                                        "declarations": [
                                            {
                                                "kind": 157,
                                                "binding": {
                                                    "kind": 134299649,
                                                    "text": "f",
                                                    "rawText": "f",
                                                    "flags": 96,
                                                    "start": 19,
                                                    "end": 21
                                                },
                                                "type": null,
                                                "initializer": null,
                                                "flags": 16,
                                                "start": 19,
                                                "end": 21
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 19,
                                        "end": 21
                                    },
                                    "flags": 16,
                                    "start": 15,
                                    "end": 21
                                }
                            ],
                            "flags": 32,
                            "start": 15,
                            "end": 21
                        },
                        "flags": 32,
                        "start": 14,
                        "end": 23
                    },
                    "returnType": null,
                    "flags": 32,
                    "start": 2,
                    "end": 23
                },
                "flags": 32,
                "start": 0,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "x=function f(){ var f }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

x = function f() {
  var  f ;
};

```

### Diagnostics

```javascript
✔ No errors
```

