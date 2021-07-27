# Kataw parser test case

## Input

`````js
async function * f(){}
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
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 14
            },
            "asteriskToken": {
                "kind": 201360950,
                "flags": 64,
                "transformFlags": 32,
                "start": 14,
                "end": 16
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 16,
                "end": 18
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 19,
                "end": 19
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 21
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 20,
                "end": 22
            },
            "returnType": null,
            "flags": 400,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "async function * f(){}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
async function *f() {}
```

### Diagnostics

```javascript
✔ No errors
```

