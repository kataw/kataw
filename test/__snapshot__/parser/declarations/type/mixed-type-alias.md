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
                "end": 13
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
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 193,
                        "key": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 17,
                            "end": 23
                        },
                        "value": {
                            "kind": 134234345,
                            "flags": 64,
                            "start": 24,
                            "end": 31
                        },
                        "optionalToken": null,
                        "staticToken": null,
                        "flags": 0,
                        "start": 17,
                        "end": 31
                    },
                    {
                        "kind": 193,
                        "key": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "start": 32,
                            "end": 38
                        },
                        "value": {
                            "kind": 134234254,
                            "flags": 64,
                            "start": 39,
                            "end": 47
                        },
                        "optionalToken": null,
                        "staticToken": null,
                        "flags": 0,
                        "start": 32,
                        "end": 47
                    },
                    {
                        "kind": 193,
                        "key": {
                            "kind": 134299649,
                            "text": "baz",
                            "rawText": "baz",
                            "flags": 96,
                            "start": 48,
                            "end": 54
                        },
                        "value": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 55,
                            "end": 62
                        },
                        "optionalToken": null,
                        "staticToken": null,
                        "flags": 0,
                        "start": 48,
                        "end": 62
                    }
                ],
                "indexers": [],
                "callProperties": [],
                "internalSlots": [],
                "flags": 0,
                "start": 15,
                "end": 65
            },
            "flags": 16,
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

