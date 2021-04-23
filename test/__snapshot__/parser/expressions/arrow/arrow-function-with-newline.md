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
                "start": 13,
                "end": 16
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 768,
                    "start": 7,
                    "end": 8
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "t",
                        "rawText": "t",
                        "flags": 768,
                        "start": 11,
                        "end": 13
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 11,
                    "end": 13
                },
                "flags": 0,
                "start": 9,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 18,
                    "end": 18
                },
                "flags": 256,
                "start": 16,
                "end": 20
            },
            "flags": 2304,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "async (f)\n: t => { }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

