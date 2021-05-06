# Kataw parser test case

## Options

`````js
{ impliedStrict: true }
`````

## Input

`````js
if (true) function f() {} else ;
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
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134,
                "text": true,
                "flags": 96,
                "start": 4,
                "end": 8
            },
            "consequent": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 0,
                    "start": 9,
                    "end": 18
                },
                "generatorToken": null,
                "name": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 18,
                    "end": 20
                },
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 20,
                    "end": 22
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 24,
                        "end": 24
                    },
                    "flags": 32,
                    "start": 22,
                    "end": 25
                },
                "typeParameters": null,
                "returnType": null,
                "flags": 16,
                "start": 9,
                "end": 25
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 64,
                "start": 25,
                "end": 30
            },
            "alternate": {
                "kind": 168,
                "flags": 16,
                "start": 30,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "if (true) function f() {} else ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

if (true)
else ;
```

### Diagnostics

```javascript
✖ In strict mode code or without web compability enabled, functions can only be declared at top level or inside a block - start: 9, end: 18

```

