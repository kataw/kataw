# Kataw parser test case

## Input

`````js
if (false) ; else async function* f() {  }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 205586437,
                "flags": 96,
                "start": 4,
                "end": 9
            },
            "consequent": {
                "kind": 168,
                "flags": 16,
                "start": 10,
                "end": 12
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 64,
                "start": 12,
                "end": 17
            },
            "alternate": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 17,
                    "end": 23
                },
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "start": 23,
                    "end": 32
                },
                "asteriskToken": {
                    "kind": 67143222,
                    "flags": 64,
                    "start": 32,
                    "end": 33
                },
                "name": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 33,
                    "end": 35
                },
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 36,
                    "end": 36
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 39,
                        "end": 39
                    },
                    "flags": 32,
                    "start": 37,
                    "end": 42
                },
                "returnType": null,
                "flags": 400,
                "start": 17,
                "end": 42
            },
            "flags": 80,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "if (false) ; else async function* f() {  }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ An async function declaration is not allowed as `if-else` child - start: 17, end: 23
✖ Generators can only be declared at the top level or inside a block - start: 33, end: 35

```

