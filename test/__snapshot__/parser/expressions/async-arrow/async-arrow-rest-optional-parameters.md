# Kataw parser test case

## Input

`````js
async (...args?: any) => {};
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
            "parameters": [
                {
                    "kind": 281,
                    "ellipsisToken": {
                        "kind": 524302,
                        "flags": 64,
                        "start": 7,
                        "end": 10
                    },
                    "optionalToken": null,
                    "type": null,
                    "right": null,
                    "flags": 32,
                    "start": 7,
                    "end": 20
                }
            ],
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 21,
                "end": 24
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 26,
                    "end": 26
                },
                "flags": 32,
                "start": 24,
                "end": 27
            },
            "flags": 290,
            "start": 0,
            "end": 27
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 27,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "async (...args?: any) => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

async (...) =>  {}

```

### Diagnostics

```javascript
✔ No errors
```

