# Kataw parser test case

## Input

`````js
async function f(){
  for await (((x)=>{}).x of y);
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
            "generatorToken": null,
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
                "start": 16,
                "end": 18
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
                                "kind": 129,
                                "member": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 271,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 37,
                                            "end": 39
                                        },
                                        "typeParameters": null,
                                        "parameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 35,
                                                "end": 36
                                            }
                                        ],
                                        "asyncKeyword": null,
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 40,
                                                "end": 40
                                            },
                                            "flags": 32,
                                            "start": 39,
                                            "end": 41
                                        },
                                        "flags": 32,
                                        "start": 34,
                                        "end": 41
                                    },
                                    "flags": 32,
                                    "start": 33,
                                    "end": 42
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 43,
                                    "end": 44
                                },
                                "flags": 536870944,
                                "start": 33,
                                "end": 44
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "start": 44,
                                "end": 47
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 47,
                                "end": 49
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "start": 50,
                                "end": 51
                            },
                            "flags": 81,
                            "start": 19,
                            "end": 51
                        }
                    ],
                    "flags": 33,
                    "start": 19,
                    "end": 51
                },
                "flags": 32,
                "start": 18,
                "end": 53
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "async function f(){\n  for await (((x)=>{}).x of y);\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript

async function f() {
  for await (((x) =>  {}).x of y);
}
```

### Diagnostics

```javascript
✔ No errors
```

