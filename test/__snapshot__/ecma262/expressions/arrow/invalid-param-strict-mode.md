# Kataw parser test case

## Input

`````js
eval => {"use strict"};
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
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "eval",
                    "rawText": "eval",
                    "flags": 96,
                    "start": 0,
                    "end": 4
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 4,
                    "end": 7
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "\"use strict\"",
                                "flags": 96,
                                "start": 9,
                                "end": 21
                            }
                        ],
                        "statements": [],
                        "flags": 32,
                        "start": 9,
                        "end": 21
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 22
                },
                "flags": 32,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "eval => {\"use strict\"};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

eval => {
"\"use strict\"";
};

```

### Diagnostics

```javascript
✔ No errors
```

