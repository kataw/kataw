# Kataw parser test case

## Input

`````js
declare opaque type A;
declare opaque type B;
declare var a: A;
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
            "kind": 269,
            "declareToken": {
                "kind": 82165,
                "flags": 64,
                "start": 0,
                "end": 7
            },
            "opaqueToken": {
                "kind": 24822,
                "flags": 64,
                "start": 7,
                "end": 19
            },
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 14,
                "end": 19
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 19,
                "end": 21
            },
            "typeParameters": null,
            "superType": null,
            "impltype": null,
            "flags": 0,
            "start": 7,
            "end": 21
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 21,
            "end": 22
        },
        {
            "kind": 269,
            "declareToken": {
                "kind": 82165,
                "flags": 64,
                "start": 22,
                "end": 30
            },
            "opaqueToken": {
                "kind": 24822,
                "flags": 64,
                "start": 30,
                "end": 42
            },
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 37,
                "end": 42
            },
            "name": {
                "kind": 134299649,
                "text": "B",
                "rawText": "B",
                "flags": 96,
                "start": 42,
                "end": 44
            },
            "typeParameters": null,
            "superType": null,
            "impltype": null,
            "flags": 0,
            "start": 30,
            "end": 44
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 44,
            "end": 45
        },
        {
            "kind": 155,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 45,
                "end": 53
            },
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 53,
                "end": 57
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 57,
                            "end": 59
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "A",
                                    "rawText": "A",
                                    "flags": 96,
                                    "start": 60,
                                    "end": 62
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 60,
                                "end": 62
                            },
                            "flags": 0,
                            "start": 59,
                            "end": 62
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 57,
                        "end": 62
                    }
                ],
                "flags": 16,
                "start": 57,
                "end": 62
            },
            "flags": 4112,
            "start": 53,
            "end": 63
        }
    ],
    "isModule": false,
    "source": "declare opaque type A;\ndeclare opaque type B;\ndeclare var a: A;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 63
}
```

### Printed

```javascript



var a;
```

### Diagnostics

```javascript
✔ No errors
```

