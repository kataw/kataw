# Kataw parser test case

## Input

`````js
async (x, ...a)=>0;
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
                "flags": 0,
                "start": 15,
                "end": 17
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 7,
                    "end": 8
                },
                {
                    "kind": 223,
                    "ellipsisToken": {
                        "kind": 524302,
                        "flags": 0,
                        "start": 9,
                        "end": 13
                    },
                    "flags": 32,
                    "start": 9,
                    "end": 14
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 17,
                "end": 18
            },
            "flags": 290,
            "start": 0,
            "end": 18
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 18,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "async (x, ...a)=>0;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

