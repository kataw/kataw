# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export function bar() {
    return A.B.C.foo();
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
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "declaration": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "start": 6,
                    "end": 15
                },
                "asteriskToken": null,
                "name": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 96,
                    "start": 15,
                    "end": 19
                },
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 20,
                    "end": 20
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 161,
                                "returnKeyword": {
                                    "kind": 37757022,
                                    "flags": 81,
                                    "start": 23,
                                    "end": 34
                                },
                                "expression": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "A",
                                                    "rawText": "A",
                                                    "flags": 96,
                                                    "start": 34,
                                                    "end": 36
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "B",
                                                    "rawText": "B",
                                                    "flags": 96,
                                                    "start": 37,
                                                    "end": 38
                                                },
                                                "flags": 96,
                                                "start": 34,
                                                "end": 38
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "C",
                                                "rawText": "C",
                                                "flags": 96,
                                                "start": 39,
                                                "end": 40
                                            },
                                            "flags": 96,
                                            "start": 34,
                                            "end": 40
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 41,
                                            "end": 44
                                        },
                                        "flags": 96,
                                        "start": 34,
                                        "end": 44
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 45,
                                        "end": 45
                                    },
                                    "flags": 268435488,
                                    "start": 34,
                                    "end": 46
                                },
                                "flags": 81,
                                "start": 23,
                                "end": 47
                            }
                        ],
                        "flags": 33,
                        "start": 23,
                        "end": 47
                    },
                    "flags": 32,
                    "start": 21,
                    "end": 49
                },
                "returnType": null,
                "flags": 16,
                "start": 6,
                "end": 49
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 80,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": true,
    "source": "export function bar() {\n    return A.B.C.foo();\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

export function bar() {
  return A.B.C.foo();
}

```

### Diagnostics

```javascript
✔ No errors
```

