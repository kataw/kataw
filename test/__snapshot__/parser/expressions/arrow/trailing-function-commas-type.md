# Kataw parser test case

## Input

`````js
( props: SomeType, ) : ReturnType => ( 3 );
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
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "props",
                            "rawText": "props",
                            "flags": 96,
                            "start": 1,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "name": {
                                    "kind": 134299649,
                                    "text": "SomeType",
                                    "rawText": "SomeType",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 17
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 8,
                                "end": 17
                            },
                            "flags": 2097152,
                            "start": 8,
                            "end": 17
                        },
                        "right": null,
                        "flags": 32,
                        "start": 0,
                        "end": 17
                    }
                ],
                "returnType": {
                    "kind": 139,
                    "bitwiseOrToken": null,
                    "bitwiseAndToken": null,
                    "type": {
                        "kind": 144,
                        "name": {
                            "kind": 134299649,
                            "text": "ReturnType",
                            "rawText": "ReturnType",
                            "flags": 96,
                            "start": 22,
                            "end": 33
                        },
                        "typeParameters": null,
                        "flags": 2097152,
                        "start": 22,
                        "end": 33
                    },
                    "flags": 2097152,
                    "start": 22,
                    "end": 33
                },
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 33,
                    "end": 36
                },
                "contents": {
                    "kind": 121,
                    "expression": {
                        "kind": 201392130,
                        "text": 3,
                        "rawText": "3",
                        "flags": 96,
                        "start": 38,
                        "end": 40
                    },
                    "flags": 32,
                    "start": 36,
                    "end": 42
                },
                "flags": 32,
                "start": 0,
                "end": 42
            },
            "flags": 16,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "( props: SomeType, ) : ReturnType => ( 3 );",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

(props) =>  (3);
```

### Diagnostics

```javascript
✔ No errors
```

