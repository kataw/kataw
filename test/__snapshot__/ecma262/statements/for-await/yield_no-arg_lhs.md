# Kataw parser test case

## Input

`````js
async function f(){
  for await (yield of x);
}

async function f(){
  "use strict";
  for await (yield of x);
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 17,
                "end": 17
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "start": 19,
                                "end": 25
                            },
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "start": 25,
                                "end": 31
                            },
                            "initializer": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 96,
                                "start": 33,
                                "end": 38
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "start": 38,
                                "end": 41
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 41,
                                "end": 43
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "start": 44,
                                "end": 45
                            },
                            "flags": 81,
                            "start": 19,
                            "end": 45
                        }
                    ],
                    "flags": 33,
                    "start": 19,
                    "end": 45
                },
                "flags": 32,
                "start": 18,
                "end": 47
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 47
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 47,
                "end": 54
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 54,
                "end": 63
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 63,
                "end": 65
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 66,
                "end": 66
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "\"use strict\"",
                            "flags": 97,
                            "start": 68,
                            "end": 83
                        }
                    ],
                    "statements": [
                        {
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "start": 84,
                                "end": 90
                            },
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "start": 90,
                                "end": 96
                            },
                            "initializer": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 96,
                                "start": 98,
                                "end": 103
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "start": 103,
                                "end": 106
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 106,
                                "end": 108
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "start": 109,
                                "end": 110
                            },
                            "flags": 81,
                            "start": 84,
                            "end": 110
                        }
                    ],
                    "flags": 33,
                    "start": 68,
                    "end": 110
                },
                "flags": 32,
                "start": 67,
                "end": 112
            },
            "returnType": null,
            "flags": 144,
            "start": 47,
            "end": 112
        }
    ],
    "isModule": false,
    "source": "async function f(){\n  for await (yield of x);\n}\n\nasync function f(){\n  \"use strict\";\n  for await (yield of x);\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 113
}
```

### Printed

```javascript

async function f() {
  for await (yield of x)
    ;
}
async function f() {
"\"use strict\"";
  for await (yield of x)
    ;
}

```

### Diagnostics

```javascript
✔ No errors
```

