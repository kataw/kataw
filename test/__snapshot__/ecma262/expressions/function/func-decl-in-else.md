# Kataw parser test case

## Input

`````js
if (x) x;
else function *f(){}
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
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 5
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 8
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 6,
                "end": 9
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 65,
                "transformFlags": 0,
                "start": 9,
                "end": 14
            },
            "alternate": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 23
                },
                "asteriskToken": {
                    "kind": 201360950,
                    "flags": 64,
                    "transformFlags": 32,
                    "start": 23,
                    "end": 25
                },
                "name": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 26
                },
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 27
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 29
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 30
                },
                "returnType": null,
                "flags": 272,
                "transformFlags": 0,
                "start": 14,
                "end": 30
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "if (x) x;\nelse function *f(){}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Generators can only be declared at the top level or inside a block - start: 25, end: 26

```

