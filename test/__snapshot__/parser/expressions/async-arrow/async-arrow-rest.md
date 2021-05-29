# Kataw parser test case

## Input

`````js
async (...args: any) => {};
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
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 20,
                "end": 23
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 223,
                    "ellipsisToken": {
                        "kind": 524302,
                        "flags": 64,
                        "start": 7,
                        "end": 10
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 19
                }
            ],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 25,
                    "end": 25
                },
                "flags": 32,
                "start": 23,
                "end": 26
            },
            "flags": 290,
            "start": 0,
            "end": 26
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 26,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "async (...args: any) => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
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

