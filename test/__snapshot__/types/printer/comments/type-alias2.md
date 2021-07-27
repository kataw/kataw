# Kataw parser test case

## Input

`````js
type Foo = Array<*/* comment */>
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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 8
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "typeName": {
                        "kind": 134299649,
                        "text": "Array",
                        "rawText": "Array",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 16
                    },
                    "typeParameters": {
                        "kind": 310,
                        "types": [
                            {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 201360950,
                                    "flags": 2097216,
                                    "transformFlags": 32,
                                    "start": 17,
                                    "end": 18
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 18
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 512,
                        "start": 17,
                        "end": 18
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 32
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 10,
                "end": 32
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "type Foo = Array<*/* comment */>",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
type Foo = Array<*> /* comment */
```

### Diagnostics

```javascript
✔ No errors
```

