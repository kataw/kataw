# Kataw parser test case

## Input

`````js
declare class A { static () : number }
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
            "kind": 178,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 0,
                "end": 7
            },
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 7,
                "end": 13
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 13,
                "end": 15
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 193,
                            "key": {
                                "kind": 134299649,
                                "text": "static",
                                "rawText": "static",
                                "flags": 96,
                                "start": 15,
                                "end": 24
                            },
                            "value": {
                                "kind": 148,
                                "parameters": {
                                    "kind": 208,
                                    "functionTypeParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 26,
                                    "end": 26
                                },
                                "returnType": {
                                    "kind": 134234345,
                                    "flags": 64,
                                    "start": 29,
                                    "end": 36
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 24,
                                "end": 36
                            },
                            "optionalToken": null,
                            "staticToken": null,
                            "flags": 0,
                            "start": 15,
                            "end": 36
                        }
                    ],
                    "indexers": [],
                    "callProperties": [],
                    "internalSlots": [],
                    "flags": 0,
                    "start": 15,
                    "end": 38
                },
                "flags": 4128,
                "start": 15,
                "end": 38
            },
            "flags": 16,
            "start": 7,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "declare class A { static () : number }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

declare class A TODO!
```

### Diagnostics

```javascript
✔ No errors
```

