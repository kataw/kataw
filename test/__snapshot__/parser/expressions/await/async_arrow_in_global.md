# Kataw parser test case

## Input

`````js
async (await) => x
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
                "start": 13,
                "end": 16
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 134299649,
                    "text": "await",
                    "rawText": "await",
                    "flags": 96,
                    "start": 7,
                    "end": 12
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
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 16,
                "end": 18
            },
            "flags": 288,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "async (await) => x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

async (await) =>  x
```

### Diagnostics

```javascript
✔ No errors
```

