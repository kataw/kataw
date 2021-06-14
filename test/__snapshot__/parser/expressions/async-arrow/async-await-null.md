# Kataw parser test case

## Input

`````js
async <T>() => await null;
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
                "start": 11,
                "end": 14
            },
            "typeParameters": {
                "kind": 307,
                "typeParameters": [
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 7,
                            "end": 8
                        },
                        "type": null,
                        "defaultType": null,
                        "flags": 2097152,
                        "start": 7,
                        "end": 8
                    }
                ],
                "flags": 2097152,
                "start": 5,
                "end": 9
            },
            "parameters": [],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 208,
                "awaitKeyword": {
                    "kind": 82196,
                    "flags": 64,
                    "start": 14,
                    "end": 20
                },
                "expression": {
                    "kind": 138477575,
                    "flags": 96,
                    "start": 20,
                    "end": 25
                },
                "flags": 32,
                "start": 14,
                "end": 25
            },
            "flags": 288,
            "start": 0,
            "end": 25
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 25,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "async <T>() => await null;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

async () =>  await null

```

### Diagnostics

```javascript
✔ No errors
```

