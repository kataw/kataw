# Kataw parser test case

## Input

`````js
var foo = ( { title, ...other } ) => {

};
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 33,
                                "end": 36
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 134299649,
                                                "text": "title",
                                                "rawText": "title",
                                                "flags": 96,
                                                "start": 13,
                                                "end": 19
                                            },
                                            {
                                                "kind": 224,
                                                "ellipsisToken": {
                                                    "kind": 524302,
                                                    "flags": 64,
                                                    "start": 20,
                                                    "end": 24
                                                },
                                                "argument": {
                                                    "kind": 134299649,
                                                    "text": "other",
                                                    "rawText": "other",
                                                    "flags": 96,
                                                    "start": 24,
                                                    "end": 29
                                                },
                                                "flags": 32,
                                                "start": 20,
                                                "end": 29
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 13,
                                        "end": 29
                                    },
                                    "flags": 48,
                                    "start": 11,
                                    "end": 31
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 33,
                                    "start": 38,
                                    "end": 38
                                },
                                "flags": 32,
                                "start": 36,
                                "end": 41
                            },
                            "flags": 34,
                            "start": 9,
                            "end": 41
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 41
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 41
            },
            "flags": 16,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "var foo = ( { title, ...other } ) => {\n\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

var foo = ({ title, ...other }) =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

