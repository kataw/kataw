# Kataw parser test case

## Input

`````js
async ()=>x;
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
            "parameters": [],
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "contents": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "flags": 288,
            "start": 0,
            "end": 11
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 11,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "async ()=>x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

 () =>x ; 
```

### Diagnostics

```javascript
✔ No errors
```

