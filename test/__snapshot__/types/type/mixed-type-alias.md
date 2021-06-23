# Kataw parser test case

## Input

`````js
type MyObject = {
  foo: number,
  bar: boolean,
  baz: string,
};
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
                "start": 0,
                "end": 4
            },
            "name": {
                "kind": 134299649,
                "text": "MyObject",
                "rawText": "MyObject",
                "flags": 96,
                "start": 4,
                "end": 13
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 13,
                "end": 15
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticToken": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 17,
                                "end": 23
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 24,
                                    "end": 31
                                },
                                "flags": 2097152,
                                "start": 24,
                                "end": 31
                            },
                            "flags": 2097152,
                            "start": 17,
                            "end": 32
                        },
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticToken": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 32,
                                "end": 38
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234254,
                                    "flags": 2097216,
                                    "start": 39,
                                    "end": 47
                                },
                                "flags": 2097152,
                                "start": 39,
                                "end": 47
                            },
                            "flags": 2097152,
                            "start": 32,
                            "end": 48
                        },
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticToken": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "baz",
                                "rawText": "baz",
                                "flags": 96,
                                "start": 48,
                                "end": 54
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 55,
                                    "end": 62
                                },
                                "flags": 2097152,
                                "start": 55,
                                "end": 62
                            },
                            "flags": 2097152,
                            "start": 48,
                            "end": 63
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 15,
                    "end": 65
                },
                "flags": 2097152,
                "start": 15,
                "end": 65
            },
            "flags": 64,
            "start": 0,
            "end": 66
        }
    ],
    "isModule": false,
    "source": "type MyObject = {\n  foo: number,\n  bar: boolean,\n  baz: string,\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 66
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

