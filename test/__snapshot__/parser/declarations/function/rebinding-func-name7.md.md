# Kataw parser test case

## Input

`````js
function g() {  function f(){} function f(){} }
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
                "text": "g",
                "rawText": "g",
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
                "start": 10,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 14,
                                "end": 24
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 24,
                                "end": 26
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 26,
                                "end": 28
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 29,
                                    "end": 29
                                },
                                "flags": 32,
                                "start": 28,
                                "end": 30
                            },
                            "returnType": null,
                            "flags": 16,
                            "start": 14,
                            "end": 30
                        },
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 30,
                                "end": 39
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 39,
                                "end": 41
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 41,
                                "end": 43
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 44,
                                    "end": 44
                                },
                                "flags": 32,
                                "start": 43,
                                "end": 45
                            },
                            "returnType": null,
                            "flags": 16,
                            "start": 30,
                            "end": 45
                        }
                    ],
                    "flags": 32,
                    "start": 14,
                    "end": 45
                },
                "flags": 32,
                "start": 12,
                "end": 47
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "function g() {  function f(){} function f(){} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

 function g() {
function f() {
}
function f() {
}
} 
```

### Diagnostics

```javascript
✔ No errors
```

