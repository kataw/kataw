# Kataw parser test case

## Input

`````js
async ()=>{}
.x
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "parameters": [],
            "asyncToken": {
                "kind": 82031,
                "flags": 768,
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
                    "multiline": false,
                    "flags": 256,
                    "start": 11,
                    "end": 11
                },
                "flags": 256,
                "start": 10,
                "end": 12
            },
            "flags": 2304,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 14,
                "end": 15
            },
            "flags": 128,
            "start": 14,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "async ()=>{}\n.x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Block body arrows can not be immediately accessed without a group - start: 12, end: 14
@{x2716}@ Statement expected - start: 12, end: 14

```

