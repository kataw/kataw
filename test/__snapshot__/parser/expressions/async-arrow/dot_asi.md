# Kataw parser test case

## Input

`````js
async ()=>{}
.x
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
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "parameters": [],
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
                    "start": 11,
                    "end": 11
                },
                "flags": 32,
                "start": 10,
                "end": 12
            },
            "flags": 288,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 14,
                "end": 15
            },
            "flags": 16,
            "start": 14,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "async ()=>{}\n.x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

async () =>  {}
x;
```

### Diagnostics

```javascript
✖ Block body arrows can not be immediately accessed without a group - start: 12, end: 14
✖ Declaration or statement expected - start: 12, end: 14

```

