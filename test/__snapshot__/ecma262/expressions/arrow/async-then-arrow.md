# Kataw parser test case

## Input

`````js
async
a => a;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 5,
                    "end": 7
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 7,
                    "end": 10
                },
                "contents": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 10,
                    "end": 12
                },
                "flags": 32,
                "start": 5,
                "end": 12
            },
            "flags": 16,
            "start": 5,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "async\na => a;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

async;
a => a;

```

### Diagnostics

```javascript
✔ No errors
```

