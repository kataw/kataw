# Kataw parser test case

## Input

`````js
declare class A {
  static prototype: Object; // error
}
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
                "start": 0,
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
                            "protoKeyword": {
                                "kind": 8388716,
                                "flags": 65,
                                "start": 17,
                                "end": 26
                            },
                            "staticToken": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "prototype",
                                "rawText": "prototype",
                                "flags": 96,
                                "start": 26,
                                "end": 36
                            },
                            "optionalToken": null,
                            "value": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "Object",
                                    "rawText": "Object",
                                    "flags": 96,
                                    "start": 37,
                                    "end": 44
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 37,
                                "end": 44
                            },
                            "flags": 0,
                            "start": 17,
                            "end": 45
                        }
                    ],
                    "flags": 0,
                    "start": 15,
                    "end": 56
                },
                "flags": 4128,
                "start": 15,
                "end": 56
            },
            "flags": 16,
            "start": 0,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "declare class A {\n  static prototype: Object; // error\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 56
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

