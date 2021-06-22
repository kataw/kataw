# Kataw parser test case

## Input

`````js
async (f)
: t => { }
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
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "start": 7,
                        "end": 8
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 7,
                "end": 13
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "typeName": {
                        "kind": 134299649,
                        "text": "t",
                        "rawText": "t",
                        "flags": 96,
                        "start": 11,
                        "end": 13
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 11,
                    "end": 13
                },
                "flags": 2097152,
                "start": 11,
                "end": 13
            },
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 13,
                "end": 16
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 18,
                    "end": 18
                },
                "flags": 32,
                "start": 16,
                "end": 20
            },
            "flags": 288,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "async (f)\n: t => { }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

async  =>  {}
```

### Diagnostics

```javascript
✔ No errors
```

