# Kataw parser test case

## Input

`````js
declare class A { static foo(): number; static x : string }
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
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 24,
                                "end": 28
                            },
                            "value": {
                                "kind": 148,
                                "parameters": {
                                    "kind": 208,
                                    "functionTypeParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 29,
                                    "end": 29
                                },
                                "returnType": {
                                    "kind": 134234345,
                                    "flags": 64,
                                    "start": 31,
                                    "end": 38
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 28,
                                "end": 38
                            },
                            "optionalToken": null,
                            "staticToken": null,
                            "flags": 0,
                            "start": 24,
                            "end": 38
                        },
                        {
                            "kind": 193,
                            "key": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 46,
                                "end": 48
                            },
                            "value": {
                                "kind": 134234347,
                                "flags": 64,
                                "start": 50,
                                "end": 57
                            },
                            "optionalToken": null,
                            "staticToken": null,
                            "flags": 0,
                            "start": 46,
                            "end": 57
                        }
                    ],
                    "indexers": [],
                    "callProperties": [],
                    "internalSlots": [],
                    "flags": 0,
                    "start": 15,
                    "end": 59
                },
                "flags": 4128,
                "start": 15,
                "end": 59
            },
            "flags": 16,
            "start": 7,
            "end": 59
        }
    ],
    "isModule": false,
    "source": "declare class A { static foo(): number; static x : string }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 59
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

