# Kataw parser test case

## Input

`````js
async (): void => {}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "typeParameters": null,
            "arrowPatameterList": {
                "kind": 342,
                "parameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 7,
                "end": 7
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 138477615,
                    "flags": 2097216,
                    "start": 9,
                    "end": 14
                },
                "flags": 2097152,
                "start": 9,
                "end": 14
            },
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 14,
                "end": 17
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 19,
                    "end": 19
                },
                "flags": 32,
                "start": 17,
                "end": 20
            },
            "flags": 288,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "async (): void => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

async () => {}
```

### Diagnostics

```javascript
✔ No errors
```

