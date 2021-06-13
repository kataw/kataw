# Kataw parser test case

## Input

`````js
"use strict"; type X = (await:string) => T;
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
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "\"use strict\"",
            "flags": 96,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 13,
                "end": 20
            },
            "name": {
                "kind": 134299649,
                "text": "X",
                "rawText": "X",
                "flags": 96,
                "start": 18,
                "end": 20
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 20,
                "end": 22
            },
            "type": {
                "kind": 261,
                "arrowTypeParameterList": {
                    "kind": 10,
                    "flags": 64,
                    "start": 37,
                    "end": 40
                },
                "arrowToken": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 149,
                            "ellipsisToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "await",
                                "rawText": "await",
                                "flags": 96,
                                "start": 24,
                                "end": 29
                            },
                            "optionalToken": null,
                            "types": {
                                "kind": 134234347,
                                "flags": 64,
                                "start": 30,
                                "end": 36
                            },
                            "flags": 2097152,
                            "start": 22,
                            "end": 36
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 22,
                    "end": 36
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 40,
                        "end": 42
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 40,
                    "end": 42
                },
                "typeParameters": null,
                "flags": 2097152,
                "start": 22,
                "end": 42
            },
            "flags": 2097152,
            "start": 13,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; type X = (await:string) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

