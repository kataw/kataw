# Kataw parser test case

## Input

`````js
([0]?)=>0;
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
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 2,
                                            "end": 3
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 2,
                                    "end": 3
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 4
                            },
                            "optionalToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 4,
                                "end": 5
                            },
                            "type": null,
                            "right": null,
                            "flags": 32,
                            "start": 0,
                            "end": 5
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "start": 1,
                    "end": 6
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 6,
                    "end": 8
                },
                "contents": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 8,
                    "end": 9
                },
                "flags": 34,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "([0]?)=>0;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

([0,]?) => 0;

```

### Diagnostics

```javascript
✔ No errors
```

