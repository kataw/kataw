# Kataw parser test case

## Input

`````js
(a?:b)=>0;
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
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 6,
                    "end": 8
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 203,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 1,
                            "end": 2
                        },
                        "optionalToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 2,
                            "end": 3
                        },
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 4,
                                    "end": 5
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 4,
                                "end": 5
                            },
                            "flags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "right": null,
                        "flags": 32,
                        "start": 0,
                        "end": 5
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 8,
                    "end": 9
                },
                "flags": 32,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "(a?:b)=>0;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

(a?) =>  0;
```

### Diagnostics

```javascript
✔ No errors
```

