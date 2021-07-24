# Kataw parser test case

## Input

`````js
declare opaque type A;
declare opaque type B;
declare var a: A;

declare opaque type FBID = number;
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
            "kind": 312,
            "declareToken": {
                "kind": 82165,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "opaqueToken": {
                "kind": 24822,
                "flags": 64,
                "transformFlags": 0,
                "start": 7,
                "end": 14
            },
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "transformFlags": 0,
                "start": 14,
                "end": 19
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "transformFlags": 0,
                "start": 19,
                "end": 21
            },
            "typeParameters": null,
            "superType": null,
            "impltype": null,
            "flags": 2097152,
            "transformFlags": 0,
            "start": 7,
            "end": 21
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 21,
            "end": 22
        },
        {
            "kind": 312,
            "declareToken": {
                "kind": 82165,
                "flags": 64,
                "transformFlags": 0,
                "start": 22,
                "end": 30
            },
            "opaqueToken": {
                "kind": 24822,
                "flags": 64,
                "transformFlags": 0,
                "start": 30,
                "end": 37
            },
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "transformFlags": 0,
                "start": 37,
                "end": 42
            },
            "name": {
                "kind": 134299649,
                "text": "B",
                "rawText": "B",
                "flags": 96,
                "transformFlags": 0,
                "start": 42,
                "end": 44
            },
            "typeParameters": null,
            "superType": null,
            "impltype": null,
            "flags": 2097152,
            "transformFlags": 0,
            "start": 30,
            "end": 44
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 44,
            "end": 45
        },
        {
            "kind": 155,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "transformFlags": 0,
                "start": 45,
                "end": 53
            },
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 57,
                            "end": 59
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "A",
                                    "rawText": "A",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 60,
                                    "end": 62
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 60,
                                "end": 62
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 60,
                            "end": 62
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 57,
                        "end": 62
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 57,
                "end": 62
            },
            "flags": 4112,
            "transformFlags": 0,
            "start": 53,
            "end": 63
        },
        {
            "kind": 312,
            "declareToken": {
                "kind": 82165,
                "flags": 64,
                "transformFlags": 0,
                "start": 63,
                "end": 72
            },
            "opaqueToken": {
                "kind": 24822,
                "flags": 64,
                "transformFlags": 0,
                "start": 72,
                "end": 79
            },
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "transformFlags": 0,
                "start": 79,
                "end": 84
            },
            "name": {
                "kind": 134299649,
                "text": "FBID",
                "rawText": "FBID",
                "flags": 96,
                "transformFlags": 0,
                "start": 84,
                "end": 89
            },
            "typeParameters": null,
            "superType": null,
            "impltype": null,
            "flags": 2097152,
            "transformFlags": 0,
            "start": 72,
            "end": 89
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "number",
                "rawText": "number",
                "flags": 96,
                "transformFlags": 0,
                "start": 91,
                "end": 98
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 91,
            "end": 99
        }
    ],
    "isModule": false,
    "source": "declare opaque type A;\ndeclare opaque type B;\ndeclare var a: A;\n\ndeclare opaque type FBID = number;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 99
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 89, end: 91

```

