# Kataw parser test case

## Input

`````js
eval => {"use strict"};
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 4,
                    "end": 7
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "eval",
                    "rawText": "eval",
                    "flags": 768,
                    "start": 0,
                    "end": 4
                },
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "use strict",
                                "flags": 768,
                                "start": 9,
                                "end": 21
                            }
                        ],
                        "statements": [],
                        "multiline": false,
                        "flags": 256,
                        "start": 9,
                        "end": 21
                    },
                    "flags": 256,
                    "start": 7,
                    "end": 22
                },
                "flags": 256,
                "start": 0,
                "end": 22
            },
            "flags": 128,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "eval => {\"use strict\"};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

