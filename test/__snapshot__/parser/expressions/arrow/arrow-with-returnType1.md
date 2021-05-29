# Kataw parser test case

## Input

`````js
(foo, bar): z => null
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
                    "start": 13,
                    "end": 16
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 1,
                            "end": 4
                        },
                        {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "start": 5,
                            "end": 9
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": {
                    "kind": 139,
                    "type": {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 11,
                            "end": 13
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 11,
                        "end": 13
                    },
                    "flags": 0,
                    "start": 10,
                    "end": 13
                },
                "contents": {
                    "kind": 138477575,
                    "flags": 96,
                    "start": 16,
                    "end": 21
                },
                "flags": 32,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "(foo, bar): z => null",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

() =>  null;
```

### Diagnostics

```javascript
✔ No errors
```

